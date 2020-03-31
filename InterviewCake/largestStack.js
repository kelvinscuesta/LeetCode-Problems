class Stack {
  constructor() {
    // Initialize an empty stack
    this.items = [];
  }

  // Push a new item onto the stack
  push(item) {
    this.items.push(item);
  }

  // Remove and return the last item
  pop() {
    // If the stack is empty, return null
    // (It would also be reasonable to throw an exception)
    if (!this.items.length) {
      return null;
    }
    return this.items.pop();
  }

  // Return the last item without removing it
  peek() {
    if (!this.items.length) {
      return null;
    }
    return this.items[this.items.length - 1];
  }
}

// Implement the push, pop, and getMax methods
class MaxStack {
  constructor() {
    this.maxStack = new Stack();
    this.containerStack = new Stack();
  }

  push(item) {
    // first push to the containerStack
    const { containerStack, maxStack } = this;
    containerStack.push(item);

    const topOfMaxStack = maxStack.peek();

    if (topOfMaxStack <= item) {
      maxStack.push(item);
    }
  }

  pop() {
    const { containerStack, maxStack } = this;

    const poppedContainerItem = containerStack.pop();
    const topOfMaxStack = maxStack.peek();

    return poppedContainerItem === topOfMaxStack
      ? maxStack.pop()
      : poppedContainerItem;
  }

  getMax() {
    // does not remove the item
    // only returns it out

    const { maxStack } = this;
    return maxStack.peek();
  }
}

// stack will only have integers
// use the Stack class to implement the MaxStack class
// can have two stacks
// one contains the next seen max
// the other holds all the values
// when we push we push to container
// we only push to maxStack if

const s = new MaxStack();
s.push(5);

assertEquals(5, s.getMax(), 'check max after 1st push');

s.push(4);
s.push(7);
s.push(7);
s.push(8);

assertEquals(8, s.getMax(), 'check before 1st pop');
assertEquals(8, s.pop(), 'check pop #1');
assertEquals(7, s.getMax(), 'check max after 1st pop');
assertEquals(7, s.pop(), 'check pop #2');
assertEquals(7, s.getMax(), 'check max after 2nd pop');
assertEquals(7, s.pop(), 'check pop #3');
assertEquals(5, s.getMax(), 'check max after 3rd pop');
assertEquals(4, s.pop(), 'check pop #4');
assertEquals(5, s.getMax(), 'check max after 4th pop');

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
