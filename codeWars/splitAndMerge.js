const splitAndMerge = (string) => {
  return string.split(" ").map(elem => elem.split("").join(" ")).join(" ");
}

console.log(splitAndMerge("My name is John"));
//console.log(splitAndMerge("My name is John", "-"));
//console.log(splitAndMerge("Hello world!", "."));
//console.log(splitAndMerge("Hello world!", ","));
