/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */

// recursive solution
var bstFromPreorder = function(preorder) {
  // given an array of nums
  // preorder traversal is the parent then create the left, then create the right
  // and continue
  // depth first search

  // could use a recursive approach or an iterative approach

  // lets do recursion first and see how we can adapt

  if (!preorder) return null;

  const root = new TreeNode(preorder[0]);

  // to make the left sub tree we want to make it off the first lower number we encounter
  // to make the right sub tree we want to make it off the first higher number we encounter

  // each subtree will follow this pattern
  let firstLower = Infinity;
  let firstHigher = Infinity;

  for (let i = 1; i < preorder.length; i += 1) {
    if (preorder[i] < root.val) {
      firstLower = Math.min(firstLower, i);
    } else if (preorder[i] > root.val) {
      firstHigher = Math.min(firstHigher, i);
    }
  }

  if (firstLower !== Infinity && firstHigher !== Infinity) {
    root.left = bstFromPreorder(preorder.slice(firstLower, firstHigher));
    root.right = bstFromPreorder(preorder.slice(firstHigher));
  }

  if (firstLower !== Infinity && firstHigher === Infinity) {
    root.left = bstFromPreorder(preorder.slice(firstLower));
  }

  if (firstLower === Infinity && firstHigher !== Infinity) {
    root.right = bstFromPreorder(preorder.slice(firstHigher));
  }

  return root;
};

var iterativebstFromPreorder = function(preorder) {
  // iterative approach using a stack
  const root = new TreeNode(preorder[0]);
  const stack = [root];

  // iterate through the array

  for (let i = 1; i < preorder.length; i += 1) {
    // create the current node
    const node = new TreeNode(preorder[i]);

    // if the node is less than the top of the stack, make it the left value

    if (node.val < stack[stack.length - 1].val)
      stack[stack.length - 1].left = node;
    else {
      // else we want to find the parent node of the current node
      // the parent node is the node that
      let parentNode;

      // while the stack still has a length, find the parent node that best makes it balanced
      while (stack.length && stack[stack.length - 1].val < node.val) {
        // pop off the top of the stack
        parentNode = stack.pop();
      }
      // our parentNode will be the last value we popped off
      parentNode.right = node;
    }
    // push the current node to the top of the stack
    stack.push(node);
  }
  // return the root at the end

  return root;
};
