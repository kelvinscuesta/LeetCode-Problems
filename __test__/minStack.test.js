const MinStack = require('../Easy/155minStack.js');

// minStack should have a push method
// pop() to remove top element
// a top() method that gets the top element
// and a getMin() method that gets the minimum value

/*
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.
*/

// if I implement as a class, would have to use a mock function
describe('Creating the minStack Class', () => {
  it('should create a minStack obj, with the different methods on it', () => {
    const myMinStack = new MinStack();

    // figure out mocking later
    // expect(MinStack).toHaveBeenCalled();
    expect(typeof myMinStack).toBe('object');
    expect(myMinStack).toHaveProperty('pop');
    expect(myMinStack).toHaveProperty('push');
    expect(myMinStack).toHaveProperty('top');
    expect(myMinStack).toHaveProperty('getMin');
  });

  it('should push values', () => {
    const myMinStack = new MinStack();
    myMinStack.push(1);
    myMinStack.push(2);
    myMinStack.push(3);

    expect(myMinStack.length).toBe(3);
  });

  it('should pop values', () => {
    const myMinStack = new MinStack();
    myMinStack.push(1);
    myMinStack.push(2);
    myMinStack.push(3);
    const poppedElem = myMinStack.pop();
    expect(poppedElem).toBe(3);
    expect(myMinStack.length).toBe(2);
  });

  it('should get the top of the stack', () => {
    const myMinStack = new MinStack();
    myMinStack.push(1);
    myMinStack.push(2);
    myMinStack.push(3);
    expect(myMinStack.top()).toBe(3);
    myMinStack.pop();
    expect(myMinStack.top()).toBe(2);
  });

  it('should get the minimum value of the stack', () => {
    const myMinStack = new MinStack();
    myMinStack.push(1);
    myMinStack.push(2);
    myMinStack.push(3);
    expect(myMinStack.getMin()).toBe(1);
    myMinStack.pop();
    myMinStack.push(-1);
    myMinStack.push(10);
    myMinStack.push(-10);
    expect(myMinStack.getMin()).toBe(-10);
    myMinStack.pop();
    expect(myMinStack.getMin()).toBe(-1);
  });

  it('should still produce min values if the same min occurs multiple times', () => {
    const myMinStack = new MinStack();
    myMinStack.push(1);
    myMinStack.push(1);
    myMinStack.push(2);
    myMinStack.push(10);
    myMinStack.push(1);
    myMinStack.push(6);
    myMinStack.push(7);
    expect(myMinStack.getMin()).toBe(1);
    myMinStack.pop();
    myMinStack.pop();
    myMinStack.pop();
    expect(myMinStack.getMin()).toBe(1);
  });
  // should have edge cases reasoned out as well like multiple of the same min
});
