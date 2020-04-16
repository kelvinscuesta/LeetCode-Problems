/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
  if (s[0] === ')') return false;
  if (s.length === 1 && s[0] === '*') return true;
  // might want to build up a stack
  // and keep counts of left and *s that occur
  // if I hit a right paren can pop out or remove a left paren before touching an asterisk

  let leftParens = 0;
  let asterisks = 0;
  let leftAsteriskStack = [];

  for (let i = 0; i < s.length; i += 1) {
    // if a left parens, we want to add to the stack and increase left parens count
    const el = s[i];
    if (el === '(') {
      leftParens += 1;
      leftAsteriskStack.push('(');
    }

    if (el === '*') {
      asterisks += 1;
      leftAsteriskStack.push('*');
    }

    if (el === ')') {
      // return false if they're both at zero at the time of encountering a ')' not a valid string

      if (leftParens === 0 && asterisks === 0) {
        return false;
      }

      // otherwise we want to find the closest left parens if it exists and balance out

      if (leftParens !== 0) {
        // find the closest leftParens

        if (leftAsteriskStack[leftAsteriskStack.length - 1] === '(') {
          leftAsteriskStack.pop();
          leftParens -= 1;
        } else {
          for (let j = leftAsteriskStack.length - 1; j >= 0; j -= 1) {
            if (leftAsteriskStack[j] === '(') {
              leftAsteriskStack.splice(j, 1);
              leftParens -= 1;
              break;
            }
          }
        }
      } else {
        // if you can't balance out with a left parens, balance out with an asterisk
        leftAsteriskStack.pop();
        asterisks -= 1;
      }
    }
  }

  // console.log(leftAsteriskStack);

  let round2 = [];

  for (let el of leftAsteriskStack) {
    if (el === '(') round2.push(el);
    if (el === '*') {
      if (round2.length > 0) {
        round2.pop();
      }
    }
  }

  return round2.length === 0;
};

console.log(checkValidString('(())(())(((()*()()()))()((()()(*()())))(((*)()'));
