function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

const middleNode = head => {
  // given a head node that will consist of this.val and this.next
  const nodeList = [];

  // pointer
  let p = head;

  while (p !== null) {
    nodeList.push(p.val);
    p = p.next;
  }

  if (nodeList.length % 2 === 0) {
    return nodeList.slice(nodeList.length / 2);
  }
  return nodeList.slice(Math.floor(nodeList.length / 2));
};

const middleNode2 = head => {
  let slowP = head;
  let fastP = head;

  // while the fast either exists and its next pointer isnt null
  while (fastP && fastP.next) {
    slowP = slowP.next;
    fastP = fastP.next.next;
  }
  // slowP will be our middleNode
  return slowP;
};

const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

console.log(middleNode2(head));
