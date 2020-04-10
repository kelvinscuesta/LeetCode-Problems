/**
 * initialize your data structure here.
 */
class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
    this.length = 0;
  }
  push(value) {
    // pushes a value to this.stack
    if (this.minStack.length === 0) {
      this.minStack.push(value);
    } else if (value <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(value);
    }
    this.stack.push(value);
    this.length += 1;
  }
  pop() {
    this.length -= 1;
    // in my implementation returns a num
    const poppedElement = this.stack.pop();
    if (poppedElement === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    return poppedElement;
  }
  top() {
    // returns a num
    return this.stack[this.stack.length - 1];
  }
  getMin() {
    // returns a num
    return this.minStack[this.minStack.length - 1];
  }
}

// /**
//  * @param {number} x
//  * @return {void}
//  */
// MinStack.prototype.push = function(x) {};

// /**
//  * @return {void}
//  */
// MinStack.prototype.pop = function() {};

// /**
//  * @return {number}
//  */
// MinStack.prototype.top = function() {};

// /**
//  * @return {number}
//  */
// MinStack.prototype.getMin = function() {};

module.exports = MinStack;
