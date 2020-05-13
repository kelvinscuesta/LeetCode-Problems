/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function(num, k) {
  if (num.length <= k) return '0';

  // using a stack we can greedily approach things

  const stack = [];

  // have a pointer as well
  // we can push and pop off the stack

  // if the value is a 0 dont even have to push onto the stack

  let pointer = 0;

  while (pointer < num.length) {
    // while k has value and stack has values in it, and the last value is greater than the value we find
    while (k > 0 && stack.length && stack[stack.length - 1] > num[pointer]) {
      stack.pop();
      k -= 1;
    }
    stack.push(num[pointer]);
    pointer += 1;
  }

  // after thats done, lets just remove from the end if there still are values left
  while (k) {
    stack.pop();
    k -= 1;
  }

  // deal with leading 0s

  while (stack.length > 1 && stack[0] === '0') {
    stack.shift();
  }

  return stack.join('');
};
