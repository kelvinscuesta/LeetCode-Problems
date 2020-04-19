/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;

    if (nums[left] <= nums[mid]) {
      // left half is sorted
      if (target >= nums[left] && target <= nums[mid]) {
        // target is in the sorted left half
        right = mid - 1;
      } else {
        // target is in the right half
        left = mid + 1;
      }
    } else {
      // right half is sorted
      if (nums[mid] <= target && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }
  return -1;
};
