/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  // want to return the max of the last two digits
  // starting at the
  if (nums.length === 0) return 0;
  if (nums.length <= 2) return Math.max(...nums);
  if (nums.length === 3) return Math.max(nums[0] + nums[2], nums[1]);

  // initialize our passArr to the first and second values of our nums array
  const passArr = [nums[0], nums[1], nums[0] + nums[2]];

  // start our loop at the third number

  for (let i = 3; i < nums.length; i += 1) {
    const popped = passArr.shift();
    const oldMid = passArr[0];

    const valueToAdd = Math.max(popped, oldMid) + nums[i];

    passArr.push(valueToAdd);
  }

  return Math.max(passArr[passArr.length - 2], passArr[passArr.length - 1]);
};
