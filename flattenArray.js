/*
 Implement a function flatten, that flattens arrays with arbitrary levels of nesting, and recursively concatenates all arrays within it into an array containing only a single level.
*/

const flatten = (array) => {
  const result = [];
  const copy = array.slice();
  while(copy.length) {
    const item = copy.shift();
    if (Array.isArray(item)) {
      copy.unshift(...item);
    } else {
      result.push(item);
    }
  }
  return result;
}

console.log(flatten([1, 2, 3]));
console.log(flatten([1, [2, 3]]));
console.log(flatten([[1, 2],[3, 4],]));
console.log(flatten([1, [2, [3, [4, [5]]]]]));
