const isValidParentheses = (str) => {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    const peek = stack[stack.length - 1];
    if (current === ")") {
      if (peek === "(") {
        stack.pop();
      } else {
        return false;
      }
    } else if (current === "[") {
      if (peek === "]") {
        stack.pop();
      } else {
        return false;
      }
    } else if (current === "{") {
      if (peek === "}") {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(current);
    }
  }
 return stack.length === 0; 
}

console.log(isValidParentheses("()"));
console.log(isValidParentheses("() [] {}"));
console.log(isValidParentheses("(]"));
console.log(isValidParentheses("[}"));
console.log(isValidParentheses("[](}[](}"));
