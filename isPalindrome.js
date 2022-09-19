const isPalindrome = function(x) {
  const toString = x.toString().split('');
  let reverseStr = [...toString].reverse();
  if (toString.join('') === reverseStr.join('')) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome(121));
console.log(isPalindrome(123));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
