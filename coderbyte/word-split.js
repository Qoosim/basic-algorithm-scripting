let strArr = ["baseball", "a,all,b,ball,bas,base,cat,code,d,e,quit,z"]
// let strArr = ["hellocat", "apple,bat,cat,goodbye,hello,yellow,why"]
function WordSplit(){
  // First Element, with single string   
  let wordToCompare = strArr[0]
  // Second Element, with single string   
  let stringDictionary = strArr[1]

  // Array of split strings   
  let singleStrings = stringDictionary.split(',')
  // Hold Answers   
  let result = ""

  singleStrings.map((firstWord) => {

    let splitMainWordArray = wordToCompare.split(firstWord)

    if(splitMainWordArray.length > 0){

      splitMainWordArray.map((word)=>{

        let joinedWord = firstWord + word
        let reversedWord = [joinedWord].reverse().toString()

        if(joinedWord === wordToCompare || reversedWord === wordToCompare){
          // console.log(firstWord, word, 'winner')
          answerWords = "" + firstWord + ", " + word + ""
        } else {
          return 'Not Possible'
        }

      })
    }

  })

  return result;
}
