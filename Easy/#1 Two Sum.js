/**
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 */

// edge cases: empty array -> question says will have exactly one solution
//
// will always be array of ints
const twoSum = (nums, target) => {
  // want to return out the indices that sum up to the target
  // create a storage object
  // stores the current element and the index it appeared in

  const indices = [];
  const numberCache = {};
  numberCache[nums[0]] = 0;

  for (let i = 1; i < nums.length; i += 1) {
    // want to check if the remainder exists in the numberCache
    const remainder = target - nums[i];
    if (numberCache[remainder] || numberCache[remainder] === 0) {
      // push the indices and return out
      indices.push(numberCache[remainder], i);
      return indices;
    }
    numberCache[nums[i]] = i;
  }
};
