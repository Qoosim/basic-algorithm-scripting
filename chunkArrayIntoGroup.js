const chunkArrayInGroups = (arr, size) => {
  const chunk = [];
  for (let i = 0; i < arr.length; i += size) {
    chunk.push(arr.slice(i, i + size));
  }
  return chunk;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"], 2));

// splice method

function chunkArrayInGroups2(arr, size) {
  let result = [];
  while(arr.length) {
    result.push(arr.splice(0, size))
  }
  return result;
}

console.log(chunkArrayInGroups2(["a", "b", "c", "d", "e", "f"], 3));
