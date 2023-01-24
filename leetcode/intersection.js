const intersection = (arr1, arr2) => {
  const setA = new Set(arr1);
  const setB = new Set(arr2);
  const intersect = new Set([...setA].filter((value) => setB.has(value)));

  return Array.from(intersect);
}

console.log(intersection([1,2,2,1], [2,2]));
console.log(intersection([4,9,5], [9,4,9,8,4]));
console.log(intersection([1,2,3,1], [2,4, 4, 5, 6, 3]));
