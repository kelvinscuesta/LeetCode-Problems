function hasPalindromePermutation(string) {
  // Check if any permutation of the input is a palindrome
  // given a string return a bool
  if (string.length <= 1) return true;

  const charCache = {};

  // get the count of each character
  for (let char of string) {
    charCache[char] ? (charCache[char] += 1) : (charCache[char] = 1);
  }

  let oddTracker = 0;

  for (let value of Object.values(charCache)) {
    if (value % 2 === 1) oddTracker += 1;
  }

  if (string.length % 2 === 0) {
    if (oddTracker > 0) return false;
  } else {
    // we have an odd lengthed string
    // and we want to check for
    // only one of the entries can be odd
    if (oddTracker > 1) return false;
  }

  return true;
}
