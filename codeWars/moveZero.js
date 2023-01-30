const moveZeros = arr => {
  const newArr = [];
  const updatedArr = [];
  arr.map((elem) => {
    if (elem === 0) {
      newArr.push(elem);
    } else {
      updatedArr.push(elem);
    }
  })
  return updatedArr.concat(newArr);
}

console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])); // returns[false,1,1,2,1,3,"a",0,0]
