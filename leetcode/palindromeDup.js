const isPalindrome = (num) => {
  const splitStr = num.toString().split("");
  if (splitStr.join() === splitStr.reverse().join()) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));

const reverseStr1 = (str) => {
  /*
  const splitStr = str.split(" ");
  const reverseStr = splitStr.reverse();
  const newStr = reverseStr.join();
  return newStr;
  */
  return str.split(" ").reverse().join();
}

console.log(reverseStr1("hello"));
console.log(reverseStr1("This is my plan"));
console.log(reverseStr1("I will make it insha Allah"));

const reverseStr2 = (str) => {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }

  return newStr;
}

console.log(reverseStr2("This is another method"));
console.log(reverseStr2("I want best version of myself"));
console.log(reverseStr2("I know is going to take time"));
console.log(reverseStr2("I am ready to give it what it takes"));

const reverseStr3 = (str) => {
  if (str = "") {
    return "";
  } else {
    return reverseStr3(str.slice(1)) + str.charAt(0);
  }
}

console.lo(reverseStr3("hello"));
