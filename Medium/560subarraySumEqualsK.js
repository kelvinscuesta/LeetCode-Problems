/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  // the brute force approach is to iterate through each value i
  // and for each value i
  // find if any next value will generate the array
  let subarrayCount = 0;

  // can we optimize the brute force
  // and use extra space

  for (let i = 0; i < nums.length; i += 1) {
    let sum = nums[i];
    if (sum === k) subarrayCount += 1;
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[j] + sum === k) subarrayCount += 1;
      sum += nums[j];
    }
  }
  return subarrayCount;
};

const subArrayMap = (nums, k) => {
  // optimized O(n) solution

  // in my own words

  // we are trying to find any distances between two sums

  // lets say we are at index 2 and 5, k = 9
  // index 2 has a sum of 18
  // index 5 has a sum of 27

  // if index 5 sum - index 2 sum is equal to our k
  // then we know the sum from 3 to 5 is k, and that counts as a sub array

  // we can do this left to right which is what the below tracks

  let map = new Map();
  let sum = 0;
  let count = 0;
  map.set(0, 1);

  for (let i = 0; i < nums.length; i += 1) {
    sum += nums[i];

    if (map.has(sum - k)) count += map.get(sum - k);
    if (map.has(sum)) map.set(sum, map.get(sum) + 1);
    else map.set(sum, 1);
  }

  return count;
};
