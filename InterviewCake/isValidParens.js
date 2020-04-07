function isValid(code) {
  // Determine if the input code is valid
  const openerStack = [];

  for (let i = 0; i < code.length; i += 1) {
    const char = code[i];

    switch (char) {
      case '(':
      case '[':
      case '{':
        openerStack.push(char);
        break;
      case ')':
        if (openerStack.pop() !== '(') return false;
        break;
      case '}':
        if (openerStack.pop() !== '{') return false;
        break;
      case ']':
        if (openerStack.pop() !== '[') return false;
        break;
      default:
        break;
    }
  }

  return openerStack.length === 0;
}

// Tests

let desc = 'valid short code';
assertEqual(isValid('()'), true, desc);

desc = 'valid longer code';
assertEqual(isValid('([]{[]})[]{{}()}'), true, desc);

desc = 'mismatched opener and closer';
assertEqual(isValid('([][]}'), false, desc);

desc = 'missing closer';
assertEqual(isValid('[[]()'), false, desc);

desc = 'extra closer';
assertEqual(isValid('[[]]())'), false, desc);

desc = 'empty string';
assertEqual(isValid(''), true, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
