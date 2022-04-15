const isPalindrome = (num) => {
  let splittedStr = num.toString().split('');
  let reverseStr = [...splittedStr].reverse();
  if (splittedStr.join('') === reverseStr.join('')) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome(121));
console.log(isPalindrome(123));
console.log(isPalindrome(527));
console.log(isPalindrome(545));
console.log(isPalindrome(-141));
console.log(isPalindrome(10));

