/**
 * @param {number[]} nums
 */

var Node = function(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
};

var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
};

var FirstUnique = function(nums) {
  this.myQueue = new DoublyLinkedList();
  this.myQueue.head = new Node();
  this.myQueue.tail = new Node();
  this.myQueue.head.next = this.myQueue.tail;
  this.myQueue.tail.prev = this.myQueue.head;

  // now have a doubly linked list
  // since we're only adding values into the queue we can take nums and convert them to nodes
  this.nodeStorage = {};
  this.counts = new Map();

  for (let num of nums) {
    if (this.counts.has(num)) {
      this.counts.set(num, this.counts.get(num) + 1);
    } else this.counts.set(num, 1);
  }

  for (let [key, value] of this.counts.entries()) {
    if (value === 1) {
      const node = new Node(key);
      // want to make each tails prev
      this.nodeStorage[key] = node;
      const prevNode = this.myQueue.tail.prev;
      node.next = prevNode.next;
      node.prev = prevNode;
      this.myQueue.tail.prev = node;
      prevNode.next = node;
    }
  }
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {
  return this.myQueue.head.next.val || -1;
};

/**
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(value) {
  // if we're adding the second value
  if (this.counts.get(value) === 1) {
    const node = this.nodeStorage[value];

    const prevNode = node.prev;
    const nextNode = node.next;

    prevNode.next = nextNode;
    nextNode.prev = prevNode;

    this.counts.set(value, this.counts.get(value) + 1);
    delete this.nodeStorage[value];
  }

  // if its greater than one we can just increment the count and do nothing
  else if (this.counts.get(value) > 1) {
    this.counts.set(value, this.counts.get(value) + 1);
  } else {
    // otherwise we add it to our queue
    const node = new Node(value);
    // want to make each tails prev
    this.counts.set(value, 1);
    this.nodeStorage[value] = node;
    const prevNode = this.myQueue.tail.prev;
    node.next = prevNode.next;
    node.prev = prevNode;
    this.myQueue.tail.prev = node;
    prevNode.next = node;
  }
};

/**
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */
