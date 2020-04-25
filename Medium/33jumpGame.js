/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
  // if we work backwards we can see if a number at index i until 0 can reach a true spot

  // think of edge cases!
  if (nums.length === 1) return true;
  // initialize the backwards array with a 1

  const backArr = [1];

  nums[nums.length - 2] >= backArr[0]
    ? backArr.unshift(true)
    : backArr.unshift(false);

  if (nums.length === 2) return backArr[0];

  // each iteration we will add one to the last element

  // if a value is greater than or equal to the last element we know we can reach it
  // if a value less than we have to check if it can reach any of the true spots

  for (let i = nums.length - 3; i >= 0; i -= 1) {
    if (nums[i] > backArr[backArr.length - 1]) {
      backArr.unshift(true);
    } else {
      let canReach = false;
      for (let j = 0; j < nums[i]; j += 1) {
        if (backArr[j] === true) {
          canReach = true;
          break;
        }
      }
      backArr[backArr.length - 1] += 1;
      backArr.unshift(canReach);
    }
  }
  // console.log(backArr);
  return backArr[0];
};

console.log(canJump([3, 2, 1, 0, 4]));
