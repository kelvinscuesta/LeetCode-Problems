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
 * @return {number}
 */
var minDepth = function (root) {
  // one way I'm thinking of doing this is storing all the mins and returning that out
  // however one issue is that we don't need to store them all
  // what if we just store the min value after traversing the parent element



  if (!root) return 0;
  if (!root.left && !root.right) return 1;

  let min = Infinity;

  const dfs = (root, depth) => {

    if (!root.left && !root.right) {
      min = Math.min(min, depth);
      return;
    }

    root.left ? dfs(root.left, depth + 1) : null;
    root.right ? dfs(root.right, depth + 1) : null;

    return;
  }

  dfs(root, 1);

  return min;




};