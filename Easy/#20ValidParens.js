/* 
Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true

*/

const isValid = string => {
  if (string.length === 0) return true;

  // need to keep track of order of parens coming in
  // want to iterate through the string
  // can immediately return out false if we reach an invalid character
  // invalid characters are when closing doesn't match

  // can use a stack to keep a track of the most recent opening bracket
  const parensStack = [];

  // want to push new opening brackets
  // and pop if they are cleared with their corressponding closing

  for (let char of string) {
    // for each iteration

    // we want to check if its an opening bracket
    // or a closing bracket

    if (char === '(' || char === '[' || char === '{') parensStack.push(char);

    if (char === ')' || char === ']' || char === '}') {
      // want to check if parensStack has any values within it
      if (parensStack.length === 0) return false;
      else {
        const lastCharInStack = parensStack[parensStack.length - 1];
        switch (char) {
          case ')':
            if (lastCharInStack !== '(') return false;
            else parensStack.pop();
            break;
          case ']':
            if (lastCharInStack !== '[') return false;
            else parensStack.pop();
            break;
          case '}':
            if (lastCharInStack !== '{') return false;
            else parensStack.pop();
            break;
        }
      }
    }
  }
  return parensStack.length === 0;
};

// console.log(isValid('([)]')); // should return false
// console.log(isValid('}[)]')); // should return false
// console.log(isValid('()[]{}')); // should return true
// console.log(isValid('')); // should return true
// console.log(isValid('([])'));
// console.log(isValid('{['))
