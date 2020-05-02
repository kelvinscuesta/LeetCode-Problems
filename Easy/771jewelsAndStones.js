/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  // create a new set to house all the jewels
  // provides us with quick look up time

  const jewelSet = new Set(J);

  let jewelCount = 0;

  for (char of S) {
    if (jewelSet.has(char)) jewelCount += 1;
  }
  return jewelCount;
};
