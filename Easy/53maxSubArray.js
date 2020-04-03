// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

const maxSubArray = nums => {
  // given an array of ints
  // return out the max subarray of contiguous values containing at least one number

  // can do it in one pass
  // if we have multiple pointers we can keep track
  // of the current contiguous sum
  // and if we scrap or not
  // and what our max at the current moment is

  // initialize to the first value, since we have to return a sum with atleast one value
  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i += 1) {
    let currentValue = nums[i];
    let sumPlusCurrentVal = currentSum + currentValue;

    // if we scrap we can replace the currentSum
    if (currentValue > sumPlusCurrentVal) {
      if (currentValue > maxSum) maxSum = currentValue;
      currentSum = currentValue;
    } else if (sumPlusCurrentVal > maxSum) {
      maxSum = sumPlusCurrentVal;
      currentSum = sumPlusCurrentVal;
    }
    // we want to check if each value added to the sum
    else {
      currentSum = sumPlusCurrentVal;
    }
  }

  return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5])); // expect 6
console.log(maxSubArray([1, 2, 3, 4, -11, 11])); // expect 11
console.log(maxSubArray([-1, -2, -3, -4, -5, -6])); // expect -1
console.log(maxSubArray([0, 0, 0, 0, 0, 0, 0, 0, -1])); // expect 0
console.log(maxSubArray([1, 1, 2]));
