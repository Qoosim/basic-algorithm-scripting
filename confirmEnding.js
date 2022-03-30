function confirmEnding(str, target) {
  if (str.substr(str.length - target.length) === target) {
    return true;
  } else {
    return false;
  }
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("Bastian", "m"));
console.log(confirmEnding("Bastian", "ian"));
console.log(confirmEnding("Alaje", "e"));
console.log(confirmEnding("Qoosim", "oo"));
