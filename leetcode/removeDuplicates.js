const removeDuplicates = (nums) => {
  const sortedArr = nums.sort();
  for (let i = 0; i < sortedArr.length; i++) {
    for (let j = i + 1; j < sortedArr.length; j++) {
      if (sortedArr[i] === sortedArr[j]) {
        sortedArr.splice(j, 1);
        j--;
      }
    }
  }
  return sortedArr;
}

console.log(removeDuplicates([1,1,2]));
console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
console.log(removeDuplicates([1,1,2,2,2,5,5,5,5,3,3,3,4,4]));
