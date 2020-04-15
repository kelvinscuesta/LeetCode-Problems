/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  // we can make multiple passes because at each step of the way we can record the previous product
  // bar the current element
  // so for = [1, 2, 3, 4]
  // our first pass we'll have

  // the brute force would be to slice off and get the multiplication for each element
  let forwardPassProduct = 1;
  let backwardPassProduct = 1;
  const outputArr = [];

  for (let num of nums) {
    outputArr.push(forwardPassProduct);
    forwardPassProduct *= num;
  }

  for (let i = nums.length - 1; i >= 0; i -= 1) {
    outputArr[i] *= backwardPassProduct;
    backwardPassProduct *= nums[i];
  }

  return outputArr;
};
