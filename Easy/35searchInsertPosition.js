/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return target > nums[0] ? 1 : 0;
  // can run a binary search and return either the index we found the target at
  // or the supposed index its supposed to be

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);
    // if the target is the mid we calculated return that index
    if (nums[mid] === target) {
      console.log(left, right);
      return mid;
    }

    // otherwise check if greater than or less than

    // also check if we're at end condition

    if (mid === left) {
      console.log(mid, left, right);
      if (target > nums[right]) return nums.length;
      if (target < nums[left]) return 0;
      return right;
    }

    if (nums[mid] > target) {
      right = mid;
    }

    if (nums[mid] < target) {
      left = mid;
    }
  }
};
