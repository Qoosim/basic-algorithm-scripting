// One way to solve this kata
const removeEveryOther = (arr) => {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      result.push(arr[i])
    }
  }
  return result;
}


//["8","x","5","1","3","r","0","d","y","1","t","o","s","t","m","u","b","4","h"]:
//expected [ '8', '5', '3', '0', 'y', 't', 's', 't', 'm', 'b', 'h' ] to deeply equal [ '8', '5', '3', '0', 'y', 't', 's', 'm', 'b', 'h' ]
/**
const removeEveryOther = (arr) => {
 return arr.filter((item, index) => index % 2 === 0);
}
 **/

console.log(removeEveryOther(['Hello', 'Goodbye', 'Hello Again'])); // ['Hello', 'Hello Again'];
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //[1, 3, 5, 7, 9];
console.log(removeEveryOther([[1, 2]])); // [[1, 2]];
console.log(removeEveryOther([['Goodbye'], {'Great': 'Job'}])); //[['Goodbye']];
console.log(removeEveryOther(["8","x","5","1","3","r","0","d","y","1","t","o","s","t","m","u","b","4","h"])); //[[ '8', '5', '3', '0', 'y', 't', 's', 'm', 'b', 'h' ]];
