function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      num = arr[i];
      break;
    } else {
      num = undefined;
    }
  }
  return num;
}

function func(num) {
  return num % 2 === 0;
}

console.log(findElement([1, 2, 3, 4], func));
