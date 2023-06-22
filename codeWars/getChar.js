const getChar = () => {
  let str = "A bird at hand";
  for (let i = 0; i < str.length; i++) {
    let ascii = str.charCodeAt(i);
    console.log(ascii);
  }
}

getChar();

function findCorValue(c) {
  return String.fromCharCode(c); // this returns corresponding value of the char
  // return String.fromCodePoint(c); // this returns corresponding value of the char
}

console.log(findCorValue(65));
