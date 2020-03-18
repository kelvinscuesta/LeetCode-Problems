/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = s => {
  /* Do not allocate extra space for another array,
  you must do this by modifying the input array in-place with O(1) extra memory.
  */

  // string is an array of chars

  /**
   * Input: ["h","e","l","l","o"]
   * Output: ["o","l","l","e","h"]
   */

  let temp;

  for (let i = 0; i < Math.floor(s.length / 2); i += 1) {
    // iterate through the array and reverse
    temp = s[s.length - 1 - i];
    s[s.length - 1 - i] = s[i];
    s[i] = temp;
  }
};
