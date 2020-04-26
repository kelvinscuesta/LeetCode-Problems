/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */

// Given two strings text1 and text2, return the length of their longest common subsequence.
/*

    Input: text1 = "abcde", text2 = "ace" 
    Output: 3  
    Explanation: The longest common subsequence is "ace" and its length is 3.

    Input: text1 = "abc", text2 = "abc"
    Output: 3
    Explanation: The longest common subsequence is "abc" and its length is 3.

    Input: text1 = "abc", text2 = "def"
    Output: 0
    Explanation: There is no such common subsequence, so the result is 0.
*/
const longestCommonSubsequence = (text1, text2) => {
  // make a matrix of 0s
  // with the

  // create a matrix of 0s that will track the max subsequence of each step

  // accounts for a subsequence of 0 by adding 1 length
  const dp = Array(text1.length + 1)
    .fill(0)
    .map(() => Array(text2.length + 1).fill(0));
  // console.log(dp);

  let maxLength = 0;

  // iterating through the rows
  for (let i = 1; i <= text1.length; i += 1) {
    // iterating through the columns
    for (let j = 1; j <= text2.length; j += 1) {
      // want to check if the values are equal at this point
      if (text1[i - 1] === text2[j - 1]) {
        // take the diagonal value and add one to it
        // so
        dp[i][j] = dp[i - 1][j - 1] + 1;
      }
      // otherwise take the max of the top or the left value
      else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
      maxLength = Math.max(dp[i][j], maxLength);
    }
    // console.log(dp);
  }

  return maxLength;
};

// console.log(longestCommonSubsequence('abcde', 'ace'));
