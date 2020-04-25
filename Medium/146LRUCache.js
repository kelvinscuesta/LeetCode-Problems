// implementing a doubly linked list

class Node {
  constructor(key, value) {
    this.key = key;
    this.val = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = new Node();
    this.tail = new Node();
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  // get a node to be the value after the head
  moveToHead(node) {
    this.removeNode(node);
    this.insertToHead(node);
  }
  // insert a new node to the value after the head
  insertToHead(node) {
    // passed in a node

    const head = this.head;
    // correctly point the current node
    node.next = head.next;
    node.prev = head;
    // heads next will become the node
    // heads next previous will become the node

    // point the head to appropriate values
    head.next.prev = node;
    head.next = node;
  }
  // remove the value previous to the tail, and return its key
  removeTail() {
    // what we're really doing here is removing the last value
    // which would be the least recently used value

    const leastUsed = this.tail.prev;
    this.removeNode(leastUsed);
    return leastUsed.key;
  }
  // take whatever node we're at, and remove it
  removeNode(node) {
    // to remove the values of the node we're given
    // have to change the prev and the next

    const previousNode = node.prev;
    const nextNode = node.next;

    previousNode.next = nextNode;
    nextNode.prev = previousNode;
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  // cache is given a max capacity which is given when passed in
  this.capacity = capacity;
  this.hash = {};
  this.currentSize = 0;
  this.doublyLL = new DoublyLinkedList();
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  // store the node pointers inside the hash

  // get the node pointer if it exists

  let node = this.hash[key];

  // if it doesnt exist return -1
  if (!node) return -1;

  // update the node to be next to head
  this.doublyLL.moveToHead(node);

  return node.val;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  // have two situations, either capacity/ node doesnt exist
  // or capacity is full

  // either the node exists or it doesnt

  if (!this.hash.hasOwnProperty(key)) {
    let newNode = new Node(key, value);

    // add the node to the head and the hash

    this.hash[key] = newNode;

    this.doublyLL.insertToHead(newNode);
    this.currentSize += 1;

    // if capacity has been passed
    if (this.currentSize > this.capacity) {
      // we want to remove the tail or the least used
      let tail = this.doublyLL.removeTail();
      delete this.hash[tail];
      this.currentSize -= 1;
    }
  } else {
    // node does exist so move to head
    this.hash[key].val = value;
    this.doublyLL.moveToHead(this.hash[key]);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

const myLRU = new LRUCache(5);
myLRU.put('A', 1);
myLRU.put('B', 2);
console.log(myLRU.get('A'));
console.log(myLRU.get('B'));
console.log(myLRU.doublyLL);
