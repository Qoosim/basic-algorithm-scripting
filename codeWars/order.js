/*
Question: Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
*/

const order1 = (words) => {
  return result = words.split(' ').sort((a,b) => {
    function num(x) {
      const [n] = x.match(/\d/);
      return parseInt(n, 10);
    }
    return num(a) - num(b);
  }).join(' ');
}

console.log(order1("is2 Thi1s T4est 3a")) // "Thi1s is2 3a T4est"
console.log(order1("4of Fo1r pe6ople g3ood th5e the2")) //"Fo1r the2 g3ood 4of th5e pe6ople"
console.log(order1("")) //"", "empty input should return empty string"

const order2 = (words) => {
  if (!words) return words;
  return words.split(' ').sort((a, b) => {
    return a.match(/\d/) - b.match(/\d/);
  }).join(' ')
}

console.log(order2("6name 2is m4y bad1")) // "bad1 2is m4y 6name"
console.log(order2("sch3ool 2is m1y favourite1")) // "bad1 2is m4y 6name"
console.log(order2("3going th2e to1 mar4ket is5 n7ot eas6y")) // "to1 th2e 3going mar4ket is5 ease6y n7ot"
