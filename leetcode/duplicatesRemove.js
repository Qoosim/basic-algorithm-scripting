const duplicatesRemove = (nums) => {
  nums.forEach((item, index) => {
    while(item === nums[index + 1]) {
      nums.splice(index, 1);
    }
  })
  return nums;
}

console.log(duplicatesRemove([1,1,2]));
console.log(duplicatesRemove([0,0,1,1,1,2,2,3,3,4]));
console.log(duplicatesRemove([1, 2, 2, 3, 0, 8, 8, 8, 4]));
