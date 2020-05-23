/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  // will likely want to run depth first search here
  // want to keep track of the depth and the max depth so far
  // the depth to keep track of at any point is when we reach a leaf node 
  // we reach a leaf node when both left and right are null

  if (!root) return 0;


  let max = 1;

  const dfs = (root, depth) => {

    if (!root.left && !root.right) {
      max = Math.max(max, depth);
      return;
    }

    // check the left
    root.left ? dfs(root.left, depth + 1) : null;
    // check the right
    root.right ? dfs(root.right, depth + 1) : null;


    return;
  }

  dfs(root, 1);


  return max;
};