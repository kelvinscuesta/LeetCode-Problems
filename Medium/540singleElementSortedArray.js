/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
  // O(n) solution

  // we add the actual and expected results and return the difference
  /*
  let actual = 0;
  let expected = 0;
  
  for (let num of nums) {
      actual += num;
  }
  for (let i = 0; i < nums.length; i += 2) {
      expected += nums[i] * 2;
  }
  
  return expected - actual;
  */

  // problem is asking for O(log(n)) solution and constant space
  // this indicates to me we might be running a binary search
  // or splitting something in half

  // what I notice is that since the pair rule will always exist
  // everytime we split an array we know what half we should go on

  // for instance [3,3,7,7,10,11,11] is length 7 from 0 to 6
  // if we put the midpoint at index 3 which is 7, we look to both sides and both will be odd lengthed halves
  // however we check 7 and its left and right
  // if we cant find the 7 in the left and right half, thats our non duplicate
  // if it exists in one half then the non duplicate will be in the other half

  let left = 0;
  let right = nums.length - 1;
  let mid = (left + right) / 2;

  while (left <= right) {
    const value = nums[mid];

    // if it doesnt exist in left and right half
    if (nums[mid - 1] !== value && nums[mid + 1] !== value) return value;

    // have to care about mid being odd or even

    if (mid % 2 === 1) {
      if (nums[mid - 1] === value) {
        // console.log('hit 1')
        left = mid + 1;
      } else {
        // console.log('hit 2')
        right = mid - 1;
      }
    } else {
      if (nums[mid - 1] === value) {
        // console.log('hit 3');
        right = mid - 2;
      } else {
        // console.log('hit 4');
        left = mid + 2;
      }
    }

    mid = (left + right) / 2;
  }
};
