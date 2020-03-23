/* 
Given a string, find the length of the longest substring without repeating characters.

Example 1:

Input: "abcabcbb"
Output: 3 
Explanation: The answer is "abc", with the length of 3. 
Example 2:

Input: "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3. 
Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

Input: "dvdf"
Output: 3
Explanation: the longest substring is from vdf, might have to go the pointer approach and move the pointer up a value
*/

// my working solution
const lengthOfLongestSubstring = string => {
  // might need to have a tracker of the window
  // and be aware of what index value we found each repeated char
  // for instance if we have 'dvdf'
  // want to track that we initially found d at i = 0
  // v at i = 1...

  // then we know how many values to move the starting window

  let currentSubString = '';
  let maxSubLength = 0;
  let repeatCharCache = {};
  let startPointer = 0;

  for (let i = 0; i < string.length; i += 1) {
    const currentChar = string[i];

    // does the currentChar exist in our cache?

    // it doesnt:
    if (!repeatCharCache.hasOwnProperty(currentChar)) {
      // set the key-value pair to the index

      repeatCharCache[currentChar] = i;
      currentSubString += currentChar;
      if (maxSubLength < currentSubString.length)
        maxSubLength = currentSubString.length;
    } else {
      // the currentChar does exist:
      // want to move the startpointer and change the index value to +1 of wherever we originally found the repeated char
      // for example 'dvdf'
      // originally found d at index = 0
      // want to move the start pointer to one after startpointer = 1
      // and move the repeated char to the current index value
      // repeatCharCache = { 'd': 2, v: 1 }

      const prevIndex = repeatCharCache[currentChar];

      repeatCharCache[currentChar] = i;
      // make sure the start doesnt move back
      if (prevIndex + 1 > startPointer) {
        startPointer = prevIndex + 1;
      }

      currentSubString = string.substring(startPointer, i + 1);

      if (maxSubLength < currentSubString.length)
        maxSubLength = currentSubString.length;
    }
  }

  return maxSubLength;
};

console.log(lengthOfLongestSubstring('abba')); // should be 2
console.log(lengthOfLongestSubstring('pwwkew')); // should be 3

// solution found on leetcode
const lengthOfLongestSubstring2 = string => {
  let maxString = '',
    char;
  (startIndex = 0), (maxLength = 0), (sLength = string.length);

  for (let i = 0; i < sLength; i += 1) {
    char = string[i];
    startIndex = maxString.indexOf(char);

    if (startIndex > -1) {
      maxString = maxString.substring(startIndex + 1);
    }

    maxString += char;
    maxLength = Math.max(maxLength, maxString.length);
  }
  return maxLength;
};
