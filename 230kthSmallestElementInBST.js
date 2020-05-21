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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {

  // want to explore the tree with inorder traversal
  // in order means going from left to parent to right node
  // giving us everything in sequential order

  // build up array and return out the arrays kth - 1 element

  // recursive
  const inOrder = (root, arr = []) => {


    if (root === null) return arr;

    // run in order on the left
    inOrder(root.left, arr);
    // since we're concerned only with the parent nodes, push the parent node into the array
    arr.push(root.val);
    // run on the right
    inOrder(root.right, arr);
    return arr;
  }

  return inOrder(root)[k - 1];

  // iterative


};