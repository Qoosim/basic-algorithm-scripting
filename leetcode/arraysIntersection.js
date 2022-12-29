const arraysIntersection = (arr1, arr2) => {
  const setB = new Set(arr2);
  const setA = new Set(arr1);

  const intersection = new Set([...setA].filter((value) => setB.has(value)));

  return Array.from(intersection);
}

console.log(arraysIntersection([1,2,2,1], [2, 2]));
console.log(arraysIntersection([4, 9, 5], [9, 4, 9, 8, 4]));
