const valid_parenthese = (s) => {
  let st = [];

  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    let peek = st[st.length - 1];
    if (current === ')') {
      if (peek === '(') {
        st.pop();
      } else {
        return false;
      }
    } else if (current === ']') {
      if (peek === '[') {
        st.pop();
      } else {
        return false;
      }
    } else if (current === '}') {
      if (peek === '{') {
        st.pop();
      } else {
        return false;
      }
    } else {
      st.push(current);
    }
  }

  return st.length === 0;
}

console.log(valid_parenthese("()"));
console.log(valid_parenthese("()[]{}"));
console.log(valid_parenthese("[](}[](}"));
console.log(valid_parenthese("(]"));

const isValidParentheses = (str) => {
  // return immediately if there is 1 or less char in the string
  if (str.length <= 1) return false;
  
  // create a stack to store our open parens
  let stack = [];

  // map the open bracket  to its closed bracket
  let brackets = {
    '(' : ')',
    '{' : '}',
    '[' : ']'
  }

  for (let bk of str) {
    
    // if the key exists for a given bracket
    if (brackets[bk]) {

      // add that bracket to the stack
      stack.push(bk);
    } else {
      // pop the last open bracket off of the stack,
      // if the value at that brackets key in the brackets map
      // is not equal to the given bracket bk, return false
      if (brackets[stack.pop()] !== bk) return false;
    }
  }
  
  // if there are any brackets left in the stack return false, else return true.
  return stack.length > 0 ? false : true;
}

console.log(isValidParentheses("(}"));
console.log(isValidParentheses("(}[){}"));
console.log(isValidParentheses("[](}[](}"));
console.log(isValidParentheses("(]"));
console.log(isValidParentheses("(){}[]"));
console.log(isValidParentheses("("));
console.log(isValidParentheses(""));

