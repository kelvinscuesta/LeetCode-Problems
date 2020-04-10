class LinkedListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// O(n) time and space solution
// function containsCycle(firstNode) {
//   // Check if the linked list contains a cycle
//   const cycleSet = new Set();
//   let pointer = firstNode;

//   // iterate through the linkedList
//   while (pointer) {
//     if (cycleSet.has(pointer)) return true;
//     cycleSet.add(pointer);
//     pointer = pointer.next;
//   }

//   return false;
// }

// O(n) time and O(1) space solution
const containsCycle = firstNode => {
  let slowPointer = firstNode;
  let fastPointer = firstNode;

  // will never leave the loop if we do have a cycle, meaning we have a cycle
  while (fastPointer.next && fastPointer.next.next) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
    if (slowPointer === fastPointer) return true;
  }

  return false;
};

// Tests

let desc = 'linked list with no cycle';
let nodes = valuesToLinkedListNodes([1, 2, 3, 4]);
assertEquals(containsCycle(nodes[0]), false, desc);

desc = 'cycle loops to beginning';
nodes = valuesToLinkedListNodes([1, 2, 3, 4]);
nodes[3].next = nodes[0];
assertEquals(containsCycle(nodes[0]), true, desc);

desc = 'cycle loops to middle';
nodes = valuesToLinkedListNodes([1, 2, 3, 4, 5]);
nodes[4].next = nodes[2];
assertEquals(containsCycle(nodes[0]), true, desc);

desc = 'two node cycle at end';
nodes = valuesToLinkedListNodes([1, 2, 3, 4, 5]);
nodes[4].next = nodes[3];
assertEquals(containsCycle(nodes[0]), true, desc);

desc = 'empty list';
assertEquals(containsCycle(null), false, desc);

desc = 'one element linked list no cycle';
let firstNode = new LinkedListNode(1);
assertEquals(containsCycle(firstNode), false, desc);

desc = 'one element linked list cycle';
firstNode = new LinkedListNode(1);
firstNode.next = firstNode;
assertEquals(containsCycle(firstNode), true, desc);

function valuesToLinkedListNodes(values) {
  const nodes = [];
  for (let i = 0; i < values.length; i++) {
    const node = new LinkedListNode(values[i]);
    if (i > 0) {
      nodes[i - 1].next = node;
    }
    nodes.push(node);
  }
  return nodes;
}

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}
