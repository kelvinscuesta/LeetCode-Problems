//  Implement the enqueue and dequeue methods

class QueueTwoStacks {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
  enqueue(item) {
    const { stack1, stack2 } = this;

    // if we make stack2 the ordered one
    // then we always push to stack 1
    stack1.push(item);
  }

  dequeue() {
    // our two situations,
    // if stack2 is empty we have to order everything into stack2

    const { stack1, stack2 } = this;

    if (stack1.length === 0 && stack2.length === 0) {
      throw 'empty queue';
    }

    if (stack1.length === 1 && stack2.length === 0) return stack1.pop();

    if (stack2.length > 0) {
      const dequeuedEl = stack2.pop();
      return dequeuedEl;
    } else {
      const length = stack1.length;
      for (let i = 0; i < length; i += 1) {
        const poppedElement = stack1.pop();
        console.log(poppedElement);
        stack2.push(poppedElement);
      }
      return stack2.pop();
    }
  }
}

const q = new QueueTwoStacks();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q);

let desc = 'dequeue #1';
let actual = q.dequeue();
console.log(actual);
let expected = 1;
assertEquals(actual, expected, desc);

desc = 'dequeue #2';
actual = q.dequeue();
expected = 2;
assertEquals(actual, expected, desc);

q.enqueue(4);
console.log(q);

desc = 'dequeue #3';
actual = q.dequeue();
expected = 3;
assertEquals(actual, expected, desc);

console.log(q);

desc = 'dequeue #4';
actual = q.dequeue();
expected = 4;
assertEquals(actual, expected, desc);

desc = 'dequeue from empty queue';
const emptyDequeue = () => q.dequeue();
assertThrowsError(emptyDequeue, desc);

function assertEquals(a, b, desc) {
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
