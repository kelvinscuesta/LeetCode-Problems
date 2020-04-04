/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = nums => {
  // have to do it in place
  // can use pointers to keep track of the end of the sequence
  // first want to find the last non-zero element in the array

  // pointer to the last non zero index
  let lastNonZero = nums.length - 1;

  for (let i = lastNonZero; i >= 0; i -= 1) {
    if (nums[i] !== 0) {
      lastNonZero = i;
      break;
    }
  }

  // iterate backwards through the array to preserve the order

  for (let i = nums.length - 1; i >= 0; i -= 1) {
    // if we hit a 0 we want to run our while loop
    if (nums[i] === 0) {
      let zeroIterator = i;
      while (zeroIterator < lastNonZero) {
        // want to store the next element in a variable
        const nextElement = nums[zeroIterator + 1];
        nums[zeroIterator] = nextElement;
        nums[zeroIterator + 1] = 0;
        zeroIterator += 1;

        // when zeroIterator reaches the last non zero
        // want to decrement lastNonZero to change the pointer
        if (zeroIterator === lastNonZero) {
          lastNonZero -= 1;
        }
      }
    }
  }
};

const test1 = [0, 1, 0, 3, 13];
const test2 = [1, 2, 3, 0, 0, 4, 5, 6, 7, 0];
const test3 = [0, 0, 0, 0, 0, 1, 2, 3];
moveZeroes(test1);
moveZeroes(test2);
moveZeroes(test3);

console.log(test1);
console.log(test2);
console.log(test3);
