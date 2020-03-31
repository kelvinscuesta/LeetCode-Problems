/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = nums => {
  // given an array of nums
  // find the missing number
  // n = nums.length = the max number in the array

  // find the expected sum, by getting the series from nums.length to 0
  // iterate through the array
  // subtract the sums to get the missing number

  let expectedSum = 0;
  let actualSum = 0;
  let n = nums.length;
  for (let i = n; i >= 0; i -= 1) {
    expectedSum += i;
  }

  for (let num of nums) {
    actualSum += num;
  }

  return expectedSum - actualSum;
};

console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
