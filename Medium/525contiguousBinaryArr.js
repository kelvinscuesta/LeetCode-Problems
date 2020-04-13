/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
  // want to store the count and where we found it in a hashmap/table/object/dictionary
  let maxLength = 0;
  let count = 0;
  let whereCountAppeared = { 0: -1 };

  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === 0) count -= 1;
    else count += 1;

    if (whereCountAppeared[count] != null)
      maxLength = Math.max(maxLength, i - whereCountAppeared[count]);
    else whereCountAppeared[count] = i;
  }
  return maxLength;
};
