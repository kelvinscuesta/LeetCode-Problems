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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  // want to find each value's parents and depth levels
  // then at the end compare them to see if they're equivalent
  // if the parents are congruent we can return false
  // if the depths are the same we can return true

  let depthOfX;
  let depthOfY;
  let parentX;
  let parentY;

  // use to return the depth level and parent, want to only travel to parents
  const dfs = (root, value, depth) => {
    if (!root.left && !root.right) return;

    let depthLeft;
    let depthRight;

    if (root.left) {
      if (root.left.val === value) {
        if (value === x) parentX = root;
        if (value === y) parentY = root;
        return depth + 1;
      }
      depthLeft = dfs(root.left, value, depth + 1);
    }

    if (root.right) {
      // console.log('hit here')
      if (root.right.val === value) {
        if (value === x) parentX = root;
        if (value === y) parentY = root;
        return depth + 1;
      }
      depthRight = dfs(root.right, value, depth + 1);
    }
    // console.log(depthRight, depth);
    // console.log(depthLeft)

    // otherwise keep exploring

    return depthLeft === undefined ? depthRight : depthLeft;
  };
  depthOfX = dfs(root, x, 0);
  depthOfY = dfs(root, y, 0);

  // console.log(depthOfY);

  return depthOfX === depthOfY ? parentX !== parentY : false;
};

// elegant solution found on leetcode

// var isCousins = function(root, x, y) {
//   function getDepthAndParent(node, n, depth=0, parent){
//       if(!node) return null;
//       if(node.val === n) {
//           return {depth, parent};
//       }
//       let left = getDepthAndParent(node.left, n, depth+1, node);
//       let right = getDepthAndParent(node.right, n, depth+1, node);
//       return left || right;
//   }
//   let {depth: xDepth , parent: xParent } = getDepthAndParent(root,x);
//   let {depth: yDepth , parent: yParent } = getDepthAndParent(root,y);

//   return xDepth === yDepth && xParent !== yParent;
// };
