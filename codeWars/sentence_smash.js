const sentenceSmash = (arr) => {
  //return arr.length === 0 ? "" : arr.toString().split(",").join(" ").trim()
  return arr.join(" ").trim()
}

console.log(sentenceSmash([]))
console.log(sentenceSmash(["hello"]))
console.log(sentenceSmash(["hello", "world"]))
console.log(sentenceSmash(["I", "am", "going", "to", "start", "learning", "python"]))
