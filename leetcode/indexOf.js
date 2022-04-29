const indexOf = (haystack, needle) => {
  if (needle === '') return 0;
  if (haystack.indexOf(needle) !== -1) {
    return haystack.indexOf(needle);
  } else {
    return -1;
  }
}

console.log(indexOf('hello', 'll'));
console.log(indexOf('aaaaa', 'bba'));
console.log(indexOf('aaaaa', ''));
