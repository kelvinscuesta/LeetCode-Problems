/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function (t1, t2) {

  // edge cases
  if (!t1) return t2;
  if (!t2) return t1;

  // at each node create a new binary tree with merged values

  const dfs = (root1, root2) => {

    const mergedTree = new TreeNode(root1.val + root2.val);

    // handle the left not existing for one or both trees
    if (!root1.left && !root2.left) {
      mergedTree.left = null;
    }
    else if (!root1.left) {
      mergedTree.left = root2.left;
    }
    else if (!root2.left) {
      mergedTree.left = root1.left;
    }
    // if the left exists for both
    // call dfs for the left
    else {
      mergedTree.left = dfs(root1.left, root2.left);
    }

    // handle the right not existing for one or both trees

    if (!root1.right && !root2.right) {
      mergedTree.right = null;
    }
    else if (!root1.right) {
      mergedTree.right = root2.right;
    }
    else if (!root2.right) {
      mergedTree.right = root1.right;
    }
    // if right exists for both call dfs for both
    else {
      mergedTree.right = dfs(root1.right, root2.right);
    }


    return mergedTree;
  }


  return dfs(t1, t2);


};