const searchInsert = (nums, target) => {
  let indexTarget = 0;
  nums.forEach((item, index) => {
    if (target === null) {
      return;
    }
    if (item === target) {
      indexTarget = index;
    }
    if (item < target) {
      indexTarget = index + 1;
    }
  })
  return indexTarget;
}

console.log(searchInsert([1,3,5,6], 5));
console.log(searchInsert([1,3,5,6], 2));
console.log(searchInsert([1,3,5,6], 7));
