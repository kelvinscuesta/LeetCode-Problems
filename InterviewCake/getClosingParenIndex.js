function getClosingParen(sentence, openingParenIndex) {
  // Find the position of the matching closing parenthesis
  const openParenStack = [];
  openParenStack.push('(');

  const length = sentence.length;

  for (let i = openingParenIndex + 1; i < length; i += 1) {
    const paren = sentence[i];

    if (paren === '(') {
      openParenStack.push(paren);
    } else if (paren === ')') {
      if (openParenStack.length === 1) {
        return i;
      } else {
        openParenStack.pop();
      }
    }
  }

  throw 'No closing paren index found';
}

function getClosingParen2(sentence, openingParenIndex) {
  let openingParensCount = 1;

  for (let i = openingParenIndex + 1; i < sentence.length; i += 1) {
    const paren = sentence[i];

    if (paren === '(') openingParensCount += 1;
    if (paren === ')') openingParensCount -= 1;

    if (openingParensCount === 0) return i;
  }

  throw 'No closing parens found for opening index';
}

// Tests

let desc = 'all openers then closers';
let actual = getClosingParen('((((()))))', 2);
let expected = 7;
assertEqual(actual, expected, desc);

desc = 'mixed openers and closers';
actual = getClosingParen('()()((()()))', 5);
expected = 10;
assertEqual(actual, expected, desc);

desc = 'no matching closer';
const noCloser = () => getClosingParen('()(()', 2);
assertThrowsError(noCloser, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}
