const sentenceSmash = (arr) => {
  if (arr.length === 0) return ""
  const sentenceForm = arr.toString().split(",").join(" ").trim()
  return sentenceForm
}

console.log(sentenceSmash([]))
console.log(sentenceSmash(["hello"]))
console.log(sentenceSmash(["hello", "world"]))
console.log(sentenceSmash(["I", "am", "going", "to", "start", "learning", "python"]))
