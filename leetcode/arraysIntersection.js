const arraysIntersection = (arr1, arr2) => {
  const setB = new Set(arr2);
  const setA = new Set(arr1);

  const intersection = new Set([...setA].filter((value) => setB.has(value)));

  return Array.from(intersection);
}

console.log(arraysIntersection([1,2,2,1], [2, 2]));
console.log(arraysIntersection([4, 9, 5], [9, 4, 9, 8, 4]));

// Another solution
const arraysIntersection2 = (arr1, arr2) => {
  const set = new Set([...arr1]);
  const res = new Set();

  for (let i = 0; i < arr2.length; i++) {
    if (set.has(arr2[i])) {
      res.add(arr2[i]);
    }
  }

  return [...res];
}

console.log(arraysIntersection2([1,2,2,1], [2, 2]));
console.log(arraysIntersection2([4, 9, 5], [9, 4, 9, 8, 4]));

