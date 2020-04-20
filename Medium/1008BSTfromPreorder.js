/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
  if (preorder.length === 0) return null;
  if (preorder.length === 1) return new TreeNode(preorder[0]);
  // have the Tree node class
  // given an array of nums
  // want to create a binary search tree based on preorder traversal

  // nums[0] will be the root
  // we can then filter out the first lesser value and then find the first greater value and run preorder on those

  const firstNode = new TreeNode(preorder[0]);
  // could do in one loop, for clarity
  const leftHalf = preorder.filter(el => el < preorder[0]);
  const rightHalf = preorder.filter(el => el > preorder[0]);

  if (leftHalf.length !== 0) {
    firstNode.left = bstFromPreorder(leftHalf);
  } else {
    firstNode.left = null;
  }
  if (rightHalf.length !== 0) {
    firstNode.right = bstFromPreorder(rightHalf);
  } else {
    firstNode.right = null;
  }

  return firstNode;
};
