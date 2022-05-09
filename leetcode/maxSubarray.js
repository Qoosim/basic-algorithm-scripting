const maxSubArray = (nums) => {
  if (nums.length === 1) { // edge case
    return nums[0]
  }

  let sum = nums[0];
  let maxSum = sum;
  for (let i = 1; i < nums.length; i++) { // starting from index 1 for 0 index already taken
    let calc = Math.max(nums[i], maxSum + nums[i]); // returns which is bigger
    if (calc > sum) {
      sum = calc;
    }
    maxSum = calc;

  }
  return sum;
}

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));
console.log(maxSubArray([5,4,-1,7,8]));
console.log(maxSubArray([1]));
