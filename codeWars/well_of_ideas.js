const wellIdeas = (arr) => {
  /*
  const goodIdeas = [];
  let result = "";

  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === "good") {
      goodIdeas.push(arr[i])
    }
  }
  if (goodIdeas.length === 0) {
    result = "Failed!"
  } else if (goodIdeas.length === 1 || goodIdeas.length === 2) {
    result = "Publish!"
  } else if (goodIdeas.length > 2) {
    result = "I smell a series!" 
  }
  return result;
  */
  const word_count = arr.filter((x) => x === "good").length;
  return word_count < 1 ? "Fail!" :
    word_count < 3 ? "Publish!" : "I smell a series!"
}

console.log(wellIdeas(['bad', 'bad', 'bad']))
console.log(wellIdeas(['good', 'bad', 'bad', 'bad', 'bad']))
console.log(wellIdeas(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']))

/**
  

  //
//
//
if ((arr.includes("good").length === 1) ||
      (arr.includes("good").length === 2)) {
    result = "Publish!"
  } else if (arr.includes("good").length > 2) {
    result = "I smell a series!"
  } else {
    result = "Failed!"
  }

  */
