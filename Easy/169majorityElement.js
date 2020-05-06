/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  // brute force would be to count each element and return the first one that satisfies the condition

  const map = new Map();
  let majorityNum;
  let majorityFreq = 0;

  for (let num of nums) {
    map.has(num) ? map.set(num, map.get(num) + 1) : map.set(num, 1);
    if (map.get(num) > majorityFreq) {
      majorityFreq = map.get(num);
      majorityNum = num;
    }
  }

  // return the majority element
  return majorityNum;
};
