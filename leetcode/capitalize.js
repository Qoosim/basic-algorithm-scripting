const capitalize = (str) => {
  return str.split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}

console.log(capitalize('hello world!'));
console.log(capitalize('i love coding'));
console.log(capitalize('one, two, three'));
