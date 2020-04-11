function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
const diameterOfBinaryTree = root => {
  // looks like we are concerned with the max depth for each node of its left and right side
  // sum that depth from the left and right and store it
  // given the root

  // for each node in our Binary Tree
  // we want to run our helper that figures out the max depth of the left and right and sums it

  let maxDepth = 0;

  const depthHelper = root => {
    // if the root is null return 0
    if (!root) return 0;
    // otherwise we want to recurse left and right
    let left = depthHelper(root.left);
    let right = depthHelper(root.right);

    // console.log(left);
    // console.log(right);

    maxDepth = Math.max(maxDepth, left + right);
    return 1 + Math.max(left, right);
  };
  depthHelper(root);
  return maxDepth;
};

const myTree = new TreeNode(1);
myTree.left = new TreeNode(2);
myTree.left.left = new TreeNode(4);
myTree.left.left.left = new TreeNode(8);
myTree.left.left.left.left = new TreeNode(10);
myTree.left.right = new TreeNode(5);
myTree.left.right.left = new TreeNode(6);
myTree.left.right.right = new TreeNode(7);
myTree.left.right.right.right = new TreeNode(11);
myTree.left.right.right.right.right = new TreeNode(12);
myTree.right = new TreeNode(3);
myTree.right.right = new TreeNode(12);
myTree.right.right.right = new TreeNode(13);
myTree.right.right.right.right = new TreeNode(14);

console.log(myTree);
console.log(diameterOfBinaryTree(myTree));
