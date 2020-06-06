/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

// recursive solution

// var invertTree = function(root) {
//     // looks like we're given function with a root
//     // we might want to use depth first search to traverse the tree
//     // invert the left and right at every parent node and traverse deep down each path

//     if (!root) return root;
//     if (!root.left && !root.right) return root;

//     const tempPoint = root.right;
//     root.right = root.left;
//     root.left = tempPoint;

//     invertTree(root.left);
//     invertTree(root.right);

//     return root;
// };

// iterative approach
const invertTree = root => {
  // deal with edge cases
  if (!root) return root;
  if (!root.left && !root.right) return root;

  // create a stack we recurse through

  // each stack frame will have the count of paths we've gone through
  // if we have gone through 2 of them we know we can finally pop off
  const stack = [[root, 0]];

  while (stack.length) {
    // console.log(stack);
    const topOfStack = stack[stack.length - 1];

    const [currentNode, pathCount] = topOfStack;

    if (!currentNode) {
      stack.pop();
      stack[stack.length - 1][1] += 1;
      continue;
    }

    // if we're at a leaf node, no need to invert two nulls
    if (!currentNode.left && !currentNode.right) {
      // pop off the current stack frame
      stack.pop();
      // add one to the path count of the parent node of the leaf
      stack[stack.length - 1][1] += 1;
      continue;
    }

    // if the pathcount is finally two we can stop inverting and go up the tree again
    if (pathCount === 2) {
      stack.pop();
      if (stack.length) stack[stack.length - 1][1] += 1;
      continue;
    }

    if (pathCount === 1) {
      stack.push([currentNode.right, 0]);
      continue;
    }

    // otherwise
    const temp = currentNode.right;
    currentNode.right = currentNode.left;
    currentNode.left = temp;

    stack.push([currentNode.left, 0]);
  }

  return root;
};
