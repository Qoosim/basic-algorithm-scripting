function reverseString(str) {
  return str.split('').reverse().join('');
}

console.log(reverseString('alaje'));

function reverseStringWithRecursion(str) {
  if (str === '') {
    return '';
  }
  return reverseStringWithRecursion(str.substr(1)) + str.charAt(0);
}

console.log(reverseStringWithRecursion('hello ayinde'));
