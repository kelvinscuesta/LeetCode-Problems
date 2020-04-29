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
const maxPathSum = root => {
  // input example [101,10,8,null,null,-10,-20]
  // would be the tree with root 101

  // we want to keep track of sums throughout
  // could all be negative
  let maxSum = -Infinity;

  // edge cases
  if (!root) return Math.pow(-2, 31);

  // helper function to run our DFS search, will use post order I think

  const dfsSumPath = root => {
    // if the left and right are null we've reached a leaf node
    if (root.left === null && root.right === null) {
      maxSum = Math.max(root.val, maxSum);
      return root.val;
    }

    let leftPathSum = 0;
    let rightPathSum = 0;

    // if the left path exists go down the left path

    if (root.left) {
      leftPathSum = dfsSumPath(root.left);
    }
    if (root.right) {
      rightPathSum = dfsSumPath(root.right);
    }

    // now find the max sums and compare to see what to return out
    // dont want to pass up the left and right sum together though

    // console.log(leftPathSum);
    // console.log(rightPathSum);
    // console.log(root.val);

    maxSum = Math.max(
      leftPathSum + root.val,
      rightPathSum + root.val,
      leftPathSum + rightPathSum + root.val,
      root.val,
      maxSum
    );
    // console.log(maxSum);
    return Math.max(leftPathSum + root.val, rightPathSum + root.val, root.val);
  };

  dfsSumPath(root);
  return maxSum;
};

// function TreeNode(val, left, right) {
//   this.val = val === undefined ? 0 : val;
//   this.left = left === undefined ? null : left;
//   this.right = right === undefined ? null : right;
// }

// const myTree = new TreeNode(-10);
// myTree.left = new TreeNode(9);
// myTree.right = new TreeNode(20);
// myTree.right.left = new TreeNode(15);
// myTree.right.right = new TreeNode(7);
// console.log(myTree);

// console.log(maxPathSum(myTree));
