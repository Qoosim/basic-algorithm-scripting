const cascading_subset = (list, n) => {
  const result = []
  for (let i = 0; i <= list.length - n; i++) {
    result.push(list.slice(i, i + n))
  }
  return result
}

console.log(cascading_subset([1, 2, 3, 4], 2));
console.log(cascading_subset([1, 2, 3,4], 3));

