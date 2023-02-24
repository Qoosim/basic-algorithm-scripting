/* == Write a function that accepts an array of 10 integers 
(between 0 and 9), that returns a string of those numbers in 
the form of a phone number. ==*/

const createPhoneNum = (num) => {
    return `(${num.slice(0, 3).join('')}) ${num.slice(3, 6).join('')}-${num.slice(6).join('')}`
}

console.log(createPhoneNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); //"(123) 456-7890"
console.log(createPhoneNum([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); //"(111) 111-1111"
console.log(createPhoneNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); //"(123) 456-7890"

// DRY Version of the code.
const createPhoneNumbers = (num) => {
    let result = "(xxx) xxx-xxxx";
    for (let i = 0; i < num.length; i++) {
        result = result.replace('x', num[i]);
    }
    return result;
}

console.log(createPhoneNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); //"(123) 456-7890"
console.log(createPhoneNumbers([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); //"(111) 111-1111"
console.log(createPhoneNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); //"(123) 456-7890"
