const nameShuffler = (str) => {
  return str.split(" ").reverse().join(" ");
}

console.log(nameShuffler('john McClane')); // 'McClane john';
console.log(nameShuffler('Mary jeggins')); // 'jeggins Mary'
console.log(nameShuffler('tom jerry')); // 'jerry tom'
