function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var oddEvenList = function (head) {

  // can have some pointers that will keep track of the starts
  // work through the starts 
  // return out the start of the even
  if (!head) return head;

  let odd = head;
  if (head.next === null) return head;

  const originalEven = head.next;
  let even = originalEven;

  while (odd) {
    odd.next = even.next;
    if (odd.next === null) {
      odd.next = originalEven;
      break;
    }
    odd = odd.next;
    even.next = odd.next;
    if (even.next === null) {
      odd.next = originalEven;
      break;
    }
    even = even.next;

  }
  return head;
};

const myList = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(myList);
console.log(oddEvenList(myList))