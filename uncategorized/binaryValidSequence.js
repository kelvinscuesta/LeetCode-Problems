/**
 * @param {TreeNode} root
 * @param {number[]} arr
 * @return {boolean}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var isValidSequence = function(root, arr) {
  // a valid sequence is from the root to any leaf
  // looks like depth first search since we are going from a root to a leaf

  // if root doesnt exist
  if (!root) return false;
  // if root is a leaf and the arr's length is greater than 1
  if (!root.left && !root.right && arr.length > 1) return false;
  if (root.val !== arr[0]) return false;

  // otherwise we want to run dfs and find if one of the paths from root to leaf is equal to the arr
  // sequence

  // either one path returns true and it'll cancel all falses, or no trues
  const dfs = (root, arrIndex, workArr = arr) => {
    // given a root
    // we are assuming that when we recurse the parent is confirmed
    // want to return out if we are at the last position of the arr or reached the end of a path

    // if we are at the last position of the arr
    if (arrIndex === workArr.length - 1) {
      // if either a left or right exist then we are not at a leaf and not a valid sequence
      if (root.left || root.right) return false;
      return true;
    }

    // if we're at a leaf and arr can still continue
    if (!root.left && !root.right && arrIndex < workArr.length - 1) {
      return false;
    }

    // otherwise we want to check left and right values and recurse

    let leftPath;
    let rightPath;
    if (root.left) {
      leftPath =
        root.left.val === workArr[arrIndex + 1]
          ? dfs(root.left, arrIndex + 1, workArr)
          : false;
    } else leftPath = false;

    if (root.right) {
      rightPath =
        root.right.val === workArr[arrIndex + 1]
          ? dfs(root.right, arrIndex + 1, workArr)
          : false;
    } else rightPath = false;

    return leftPath || rightPath;
  };

  return dfs(root, 0, arr);
};

const myTree = new TreeNode(
  0,
  new TreeNode(
    1,
    new TreeNode(0, undefined, new TreeNode(1)),
    new TreeNode(1, new TreeNode(0), new TreeNode(0))
  ),
  new TreeNode(0, new TreeNode(0))
);
