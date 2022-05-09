/* This does not pass the tests, but work on my local machine
*
const removeElement = (nums, val) => {
  let uniqueElems = nums.filter((num) => num !== val)
  return uniqueElems;
}
*/
// One approach
const removeElement = (nums, val) => {
  while(nums.indexOf(val) !== -1) {
    nums.splice(nums.indexOf(val), 1);
  }
  return nums;
}

console.log(removeElement([3,2,2,3], 3));
console.log(removeElement([0,1,2,2,3,0,4,2], 2));

// Another approach
const removeElem = (nums, val) => {
  while(nums.includes(val)) {
    return nums.filter((num) => num !== val); // This does not pass the tests too
  }
}

console.log(removeElem([3,2,2,3], 3));
console.log(removeElem([0,1,2,2,3,0,4,2], 2));

// One more approach
const removeElems = (nums, val) => {
  while(nums.includes(val)) {
    nums.splice(nums.indexOf(val), 1);
  }
  return nums;
}

console.log(removeElems([3,2,2,3], 3));
console.log(removeElems([0,1,2,2,3,0,4,2], 2));

